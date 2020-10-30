import datetime
import json

from server.models import Question


def accuracy_lastday(x):
    return x['accuracy_lastday']


def accuracy_lastweek(x):
    return x['accuracy_lastweek']


def accuracy_lastmonth(x):
    return x['accuracy_lastmonth']


def accuracy_lastyear(x):
    return x['accuracy_lastyear']


def train_time_lastday(x):
    return x['train_time_lastday']


def train_time_lastweek(x):
    return x['train_time_lastweek']


def train_time_lastmonth(x):
    return x['train_time_lastmonth']


def train_time_lastyear(x):
    return x['train_time_lastyear']


def trains_lastday(x):
    return x['trains_lastday']


def trains_lastweek(x):
    return x['trains_lastweek']


def trains_lastmonth(x):
    return x['trains_lastmonth']


def trains_lastyear(x):
    return x['trains_lastyear']


def train_questions_lastday(x):
    return x['train_questions_lastday']


def train_questions_lastweek(x):
    return x['train_questions_lastweek']


def train_questions_lastmonth(x):
    return x['train_questions_lastmonth']


def train_questions_lastyear(x):
    return x['train_questions_lastyear']


def relative_sort(x):
    return -x['relative']


def difficulty_sort(x):
    return x['difficulty']


def get_last_month(d):
    return datetime.date(d.year - (d.month == 1), d.month - 1 or 12, 1)


def store(data):
    with open('/Users/liurunze/PycharmProjects/GaoDi/server/category.json', 'w') as json1:
        json.dump(data, json1)


def load():
    with open('/Users/liurunze/PycharmProjects/GaoDi/server/category.json', 'r') as json2:
        data = json.load(json2)
        return data


def pow(time):
    x = 1
    for i in range(time):
        x = x * 2
    return x


def set_category(array, q_id):
    data = load()
    q = Question.objects.get(_id=q_id)
    for i in array:
        if (i in data):
            q.category = pow(data[i]) + q.category
        else:
            data['cate_num'] = data['cate_num'] + 1
            data[i] = data['cate_num']
            data[data['cate_num']] = i
            q.category = pow(data[i]) + q.category
    q.save()
    store(data)


def category(array):
    data = load()
    category = 0
    for i in array:
        if (i in data):
            category = pow(data[i]) + category
        else:
            data['cate_num'] = data['cate_num'] + 1
            data[i] = data['cate_num']
            data[data['cate_num']] = i
            category = pow(data[i]) + category
    store(data)
    return category


def is_point(str, q_id):
    data = load()
    q = Question.objects.get(_id=q_id)
    if (q.category & pow(data[str])):
        return True
    else:
        return False


def include_point(num, q_cate):
    if (q_cate & num == q_cate):
        return True
    else:
        return False


def get_category(num):
    array = []
    index = 1
    n = 0
    data = load()
    index = index
    while (num >= 1):
        num = int(num / 2)
        if (num % 2 == 1):
            n = n + 1
            array.append(data[str(index)])
        index = index + 1
    return array


def relate(q_cate,target_cate):
    n = q_cate & target_cate
    count = 0
    while n & 0xffffffff != 0:
        count += 1
        n = n & (n - 1)
    return count

