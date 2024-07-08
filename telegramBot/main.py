import aiogram, logging, asyncio
from aiogram.methods.send_photo import SendPhoto
from aiogram import Bot, Dispatcher, types, F# executor, 
from aiogram.fsm.state import default_state, State, StatesGroup
from aiogram.filters import StateFilter,Filter
from aiogram.fsm.context import FSMContext
from aiogram.fsm.storage.memory import MemoryStorage
from aiogram.types import ReplyKeyboardRemove, ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardMarkup, InlineKeyboardButton
from aiogram.utils.keyboard import InlineKeyboardBuilder
from aiogram.filters.callback_data import CallbackData
from aiogram.filters.command import Command
from aiogram.types import FSInputFile,InputMediaPhoto
from aiogram.types import WebAppInfo,WebAppData
from aiogram.types import Message, LabeledPrice, ContentType
import json

TOKEN='6010142109:AAFROUI1GNv_86SuY88fpqHbtUfy5RctTcI'

# активизация бота
bot = Bot(token=TOKEN)# Объект бота
storage=MemoryStorage()
dp = Dispatcher(storage=storage)# Диспетчер для бота
logging.basicConfig(level=logging.INFO)# Включаем логирование, чтобы не пропустить важные сообщения


def generatorCart(data):
	cart = []
	names = {
		"0": "Beer",
		"1": "Drink",
		"2": "Burger",
		"3": "HotDog",
		"4": "Pizza",
		"5": "Soup",
		"6": "Taco",
		"7": "Sushi",
		"8": "Cake",
	}
	prices = {
		"0": "16000",
		"1": "12000",
		"2": "24000",
		"3": "10000",
		"4": "20000",
		"5": "25000",
		"6": "10000",
		"7": "30000",
		"8": "40000",
	}
	for item in data:
		cart.append(LabeledPrice(
			label=names[item['idProduct']],
			amount=int(prices[item['idProduct']])*int(item['countProduct'])
		))

	return cart


web_app_button = KeyboardButton(
    text='🥣Menu🍔🍺', 
    web_app=WebAppInfo(url='https://kyzne4ik.github.io/stolovkatyumgu.github.io/')
)

button_start = ReplyKeyboardMarkup(
    keyboard=[[web_app_button]], 
    resize_keyboard=True
)

# Хэндлеры на команду /start
@dp.message(Command("start"))
async def сmd_start(message: types.Message):
	await message.answer(
		'Welcome to our food ordering bot! 🍽️\n'
		'Here you will find the most delicious dishes, prepared with love and care. From classic appetizers to exotic desserts - we have everything to satisfy your gastronomic taste! 😋\n'
		'To place an order, simply select the dishes you are interested in from the 🥣Menu🍔🍺.\nBon appétit!'
	,reply_markup=button_start)


@dp.message(lambda message: message.web_app_data) 
async def answer(message: types.Message):

	data = json.loads(message.web_app_data.data)
	# print(data['basketData'])

	await bot.send_invoice(
		chat_id=message.chat.id,
		title='Покупка через Telegram Bot',
		description='Оплата производится через Юкасса',
		payload='Paylment through a bot',
		provider_token='381764678:TEST:89433',
		currency='rub',
		prices=generatorCart(data['basketData']),
		max_tip_amount=50000,
		#suggested_tip_amounts=[1000,2000,3000,4000],
		start_parameter='passbot',
		provider_data=None,
		photo_url='https://kyzne4ik.github.io/stolovkatyumgu.github.io/cart.png',
		photo_size=100,
		photo_width=800,
		photo_height=450,
		need_name=True,
		need_phone_number=True,
		need_email=True,
		need_shipping_address=False,
		send_phone_number_to_provider=False,
		send_email_to_provider=False,
		is_flexible=False,
		disable_notification=False,
		protect_content=False,
		reply_to_message_id=None,
		allow_sending_without_reply=True,
		reply_markup=None,
		request_timeout=10
	)

@dp.pre_checkout_query()
async def process_pre_checkout_query(pre_checkout_query: types.PreCheckoutQuery,bot: Bot):
    await bot.answer_pre_checkout_query(pre_checkout_query.id, ok=True)


@dp.message(F.successful_payment)
async def process_successful_payment(message: types.Message):
	await message.answer(f'👑Оплата прошла услешно!🤘', reply_markup=button_start)


if __name__ == "__main__":
	# asyncio.create_task(secondary())
    asyncio.run(dp.start_polling(bot))