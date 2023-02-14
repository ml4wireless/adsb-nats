import datetime
from datetime import datetime, date
import pytz

def formNumber(pInputText):
    try:
        return float(pInputText.replace('\r', ''))
    except:
        return float(0)


def formText(pInputText):
    return pInputText.replace('\r', '')


def printStuff(pText):
    print("{:%Y%m%d %H:%M:%S} {}".format(datetime.now(), pText))

def timestamp():
    now = datetime.now(pytz.timezone('UTC'))
    return now.isoformat()