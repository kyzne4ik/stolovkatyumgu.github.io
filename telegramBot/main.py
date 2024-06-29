import aiogram, logging, asyncio
from aiogram.methods.send_photo import SendPhoto
from aiogram import Bot, Dispatcher, types, F# executor, 
from aiogram.fsm.state import default_state, State, StatesGroup
from aiogram.filters import StateFilter
from aiogram.fsm.context import FSMContext
from aiogram.fsm.storage.memory import MemoryStorage
from aiogram.types import ReplyKeyboardRemove, ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardMarkup, InlineKeyboardButton
from aiogram.utils.keyboard import InlineKeyboardBuilder
from aiogram.filters.callback_data import CallbackData
from aiogram.filters.command import Command
from aiogram.types import FSInputFile,InputMediaPhoto
from aiogram.types import WebAppInfo

TOKEN='6010142109:AAFROUI1GNv_86SuY88fpqHbtUfy5RctTcI'

# активизация бота
bot = Bot(token=TOKEN)# Объект бота
storage=MemoryStorage()
dp = Dispatcher(storage=storage)# Диспетчер для бота
logging.basicConfig(level=logging.INFO)# Включаем логирование, чтобы не пропустить важные сообщения


bstart=InlineKeyboardBuilder().row(
	types.InlineKeyboardButton(text='WebApp', 
							   web_app = WebAppInfo(url='https://kyzne4ik.github.io/stolovkatyumgu.github.io/')
							   )
)

# Хэндлеры на команду /start
@dp.message(Command("start"))
async def сmd_start(message: types.Message):
	await message.answer('Hello! ^_^',reply_markup=bstart.as_markup())



if __name__ == "__main__":
	# asyncio.create_task(secondary())
    asyncio.run(dp.start_polling(bot))