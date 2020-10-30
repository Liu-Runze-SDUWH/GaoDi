import datetime
import random
import os, time
from django.http import JsonResponse, FileResponse, Http404
from server.models import Question, Student, Teacher, School, Class, Admin
from GaoDi.settings import BASE_DIR
from server import my_functools
from bson import ObjectId
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.core.files.storage import FileSystemStorage
# from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient

client = MongoClient(
    "mongodb://lrz:%40YRFLWBHZYlrzhsjwym404%40@172.81.235.147:25187/?authSource=GaoDi&readPreference=primary&appname=MongoDB%20Compass&ssl=false")
db = client["GaoDi"]

PATH = os.path.join(BASE_DIR, 'vuetify-web', 'dist', 'file') + '/'
PATH2 = os.path.join(BASE_DIR, 'vuetify-web', 'file') + '/'


def get_question(request):
    response = {}
    try:
        q = Question.objects.get(_id=request.GET.get('_id'))
        response["description"] = q.description
        # response["category"] = q.category
        # response["difficulty"] = q.difficulty
        # response["picture"] = str(q.picture)
        response["answer"] = str(q.answer)
        # response["answer_picture"] = str(q.answer_picture)
        response["question_class"] = str(q.question_class)
        # response["subject"] = str(q.subject)
        if (q.question_class == "choice"):
            response["choice"] = []
            response2 = {}
            response2["A"] = str(q.choice[0])
            response2["B"] = str(q.choice[1])
            response2["C"] = str(q.choice[2])
            response2["D"] = str(q.choice[3])
            response["choice"].append(response2)
        response["msg"] = "success"
        response["error_num"] = 0
    except Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_paper(request):
    response = {}
    mind = int(request.GET.get('mind'))
    maxd = int(request.GET.get('maxd'))
    req_question_Cate = ["向量", "集合", "立体几何", "圆锥曲线", "统计", "导数", "三角函数", "二项式", "三角函数", "立体几何", "圆锥曲线", "函数图像", "不等式",
                         "函数图像", "圆锥曲线", "立体几何", "数列", "立体几何", "概率", "圆锥曲线", "导数"]
    try:
        response['paper'] = []
        tag = []
        for i in range(25):
            tag.append(0)
        for i in req_question_Cate:
            index = 0
            for q in Question.objects.all():
                if my_functools.is_point(i, str(q._id)) and mind <= q.difficulty and q.difficulty <= maxd and tag[
                    index] == 0:
                    response['paper'].append(str(q._id))
                    tag[index] = 1
                    break
                index = index + 1
        response['msg'] = "获取试卷成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "获取试卷失败：" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def register(request):
    response = {}
    account = request.GET.get('account')
    password = request.GET.get('password')
    name = request.GET.get('name')
    number = request.GET.get('number')
    identity = request.GET.get('identity')
    school_name = request.GET.get('school_name')
    try:
        if identity == "0":
            Student.objects.get(account=account)
        elif identity == "1":
            Teacher.objects.get(account=account)
        elif identity == "2":
            Admin.objects.get(account=account)
        response['msg'] = "账号已存在"
        response['error_num'] = 1
    except Exception as e:
        if identity == "0":
            Student.objects.create(account=account, password=password, name=name, student_number=number,
                                   school_name=school_name, avatar="/static/file/avatar.png")
        elif identity == "1":
            Teacher.objects.create(account=account, password=password, name=name, teacher_number=number,
                                   school_name=school_name, avatar="/static/file/avatar.png", subject="math")
        elif identity == "2":
            Admin.objects.create(account=account, password=password, name=name, avatar="/static/file/avatar.png")
        response['msg'] = "注册成功"
        response['error_num'] = 0
    return JsonResponse(response)


def log_in(request):
    response = {}
    account = request.GET.get('account')
    password = request.GET.get('password')
    identity = request.GET.get('identity')
    try:
        if identity == "0":
            stu = Student.objects.get(account=account)
            if stu.password == password:
                class_names = []
                if len(stu.classes) > 0:
                    for class_id in stu.classes:
                        class_name = Class.objects.get(_id=class_id).name
                        class_names.append(class_name)
                response['msg'] = "登录成功"
                response['error_num'] = 0
                response['id'] = str(stu._id)
                response['account'] = stu.account
                response['name'] = stu.name
                response['number'] = stu.student_number
                response['school_name'] = stu.school_name
                response['classes'] = class_names
                response['avatar'] = stu.avatar
                school_id = School.objects.get(name=stu.school_name)._id
                response['school_id'] = str(school_id)
            else:
                response['msg'] = "密码不正确"
                response['error_num'] = 0
        elif identity == "1":
            tea = Teacher.objects.get(account=account)
            if tea.password == password:
                class_names = []
                if len(tea.classes) > 0:
                    for class_id in tea.classes:
                        class_name = Class.objects.get(_id=class_id).name
                        class_names.append(class_name)
                response['msg'] = "登录成功"
                response['error_num'] = 0
                response['id'] = str(tea._id)
                response['account'] = tea.account
                response['name'] = tea.name
                response['number'] = tea.teacher_number
                response['school_name'] = tea.school_name
                response['classes'] = class_names
                response['avatar'] = tea.avatar
                school_id = School.objects.get(name=tea.school_name)._id
                response['school_id'] = str(school_id)
            else:
                response['msg'] = "密码不正确"
                response['error_num'] = 0
        elif identity == "2":
            adm = Admin.objects.get(account=account)
            if adm.password == password:
                response['msg'] = "登录成功"
                response['error_num'] = 0
                response['account'] = adm.account
                response['name'] = adm.name
                response['avatar'] = adm.avatar
            else:
                response['msg'] = "密码不正确"
                response['error_num'] = 0
    except Exception as e:
        response['msg'] = "账号不存在"
        response['error_num'] = 1
    return JsonResponse(response)


def quit_class(request):
    response = {}
    id = request.GET.get('id')
    class_code = int(request.GET.get('class_code'))
    try:
        stu = Student.objects.get(_id=id)
        cla = Class.objects.get(code=class_code)
        stu.classes.remove(str(cla._id))
        cla.students.remove(id)
        stu.save()
        cla.save()
        stu = Student.objects.get(_id=id)
        class_names = []
        if len(stu.classes) > 0:
            for class_id in stu.classes:
                class_name = Class.objects.get(_id=class_id).name
                class_names.append(class_name)
        response['classes'] = class_name
        response['msg'] = "修改成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "修改失败"
        response['error_num'] = 1
    return JsonResponse(response)


def save_avatar(request):
    response = {}
    id = request.POST.get('id')
    identity = request.POST.get('identity')
    avatar = request.FILES.get('avatar', None)
    if avatar is None:
        response['msg'] = "上传头像失败"
        response['error_num'] = 1
    else:
        avatar_name = str(avatar)
        if avatar_name.split('.')[-1].lower() in ['jpeg', 'jpg', 'png']:
            if not os.path.isdir(PATH + id):
                os.makedirs(PATH + id)
            # 删掉下面的2
            if not os.path.isdir(PATH2 + id):
                os.makedirs(PATH2 + id)
            avatar_path = "/static/file/{}/{}".format(id, avatar_name)
            default_storage.save(PATH + "{}/{}".format(id, avatar_name), avatar)
            # 删掉下面的2
            default_storage.save(PATH2 + "{}/{}".format(id, avatar_name), avatar)
            try:
                if identity == "0":
                    stu = Student.objects.get(_id=id)
                    stu.avatar = avatar_path
                    stu.save()
                    response['avatar'] = avatar_path
                else:
                    tea = Teacher.objects.get(_id=id)
                    tea.avatar = avatar_path
                    tea.save()
                    response['avatar'] = avatar_path
                response['msg'] = "上传成功"
                response['error_num'] = 0
            except Exception as e:
                response['msg'] = "上传失败"
                response['error_num'] = 1
    return JsonResponse(response)


def create_class(request):
    response = {}
    class_name = request.GET.get('class_name')
    math_teacher_id = request.GET.get('math_teacher_id')
    class_code = int(time.time())
    try:
        Class.objects.create(name=class_name, math_teacher_id=math_teacher_id, code=class_code)
        response['msg'] = "新建班级成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "新建班级失败"
        response['error_num'] = 1
    return JsonResponse(response)


def get_all_category(request):
    response = {}
    try:
        data = my_functools.load()
        num = my_functools.pow(data["cate_num"] + 1) - 1
        cates = my_functools.get_category(num)
        response['error_num'] = 0
        response['cates'] = cates
        print(cates)
    except Exception as e:
        response['msg'] = "查询失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_wrong_check_lastweek(request):
    response = {}
    try:
        req_sdu = Student.objects.get(_id=request.GET.get('id'))
        last_sunday = datetime.datetime.today().date() - datetime.timedelta(
            days=datetime.datetime.today().weekday() + 1)
        last_one_sunday = datetime.datetime.today().date() - datetime.timedelta(
            days=datetime.datetime.today().weekday() + 8)
        sum1 = 0.0
        sum = 0.0
        for wrong_q in req_sdu.done:
            if (last_one_sunday < wrong_q['time'] < last_sunday and wrong_q['wrong'] == True):
                if (wrong_q['checked'] == True): sum1 = sum1 + 1
                sum = sum + 1
        response['上周复盘率'] = sum1 / sum
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_question_done(request):
    response = {}
    try:
        stu = Student.objects.get(_id=request.GET.get('id'))
        wrong = request.GET.get('wrong')
        new_done = {}
        new_done['wrong'] = wrong
        new_done['id'] = request.GET.get('q_id')
        new_done['time'] = datetime.datetime.now()
        new_done['checked'] = 0
        new_done['pk'] = len(stu.dones)
        stu.dones.append(new_done)
        stu.save()
        response['msg'] = "添加成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "添加失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def check_question(request):
    response = {}
    try:
        req_stu = Student.objects.get(_id=request.GET.get('id'))
        pk = int(request.GET.get('pk'))
        req_stu.dones[pk]['checked'] = 1
        req_stu.save()
        response['msg'] = "修改成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "修改失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_dones(request):
    response = {}
    try:
        stu = Student.objects.get(_id=request.GET.get('id'))
        response['list'] = stu.dones
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_all_questions(request):
    response = {}
    try:
        index = 1
        for q in Question.objects():
            response[str(index)] = str(q._id)
            index = index + 1
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def build_school(request):
    response = {}
    name = request.GET.get('name')
    try:
        sch = School.objects.create(name=name)
        response['id'] = str(sch._id)
        response['msg'] = "创建成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "创建失败：" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def build_class(request):
    response = {}
    try:
        code = int(time.time())
        Class.objects.create(name=request.GET.get('name'), school_id=request.GET.get('school_id'),
                             math_teacher_id=request.GET.get('math_teacher_id'), code=code)
        sch = School.objects.get(_id=request.GET.get('school_id'))
        cla = Class.objects.get(code=code)
        sch.classes.append(str(cla._id))
        sch.save()
        tea = Teacher.objects.get(_id=request.GET.get('math_teacher_id'))
        tea.classes.append(str(cla._id))
        tea.save()
        response['id'] = str(cla._id)
        response['msg'] = "创建成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "创建失败：" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def join_class(request):
    response = {}
    id = request.GET.get('id')
    class_code = int(request.GET.get('class_code'))
    try:
        stu = Student.objects.get(_id=id)
        cla = Class.objects.get(code=class_code)
        stu.classes.append(str(cla._id))
        cla.students.append(id)
        stu.save()
        cla.save()
        stu = Student.objects.get(_id=id)
        class_names = []
        for class_id in stu.classes:
            class_name = Class.objects.get(_id=class_id).name
            class_names.append(class_name)
        response['classes'] = class_names
        response['msg'] = "加入成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "加入失败：" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def join_school(request):
    response = {}
    try:
        sch = Class.objects.get(name=request.GET.get('name'))
        stu = Student.objects.get(id=request.GET.get('sdu_id'))
        stu.school_id = sch.id
        sch.students.append(stu.id)
        stu.save()
        sch.save()
        response['msg'] = "加入成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "加入失败：" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def save_note(request):
    response = {}
    title = request.GET.get('title')
    content = request.GET.get('content')
    stu_id = request.GET.get('stu_id')
    try:
        stu = Student.objects.get(_id=stu_id)
        pk = request.GET.get('pk')
        star = request.GET.get('star')
        stu.notes[int(pk)]['title'] = title
        stu.notes[int(pk)]['content'] = content
        stu.notes[int(pk)]['edit_date'] = str(datetime.datetime.today().date())
        if star == "true":
            stu.notes[int(pk)]['star'] = True
        elif star == "false":
            stu.notes[int(pk)]['star'] = False
        stu.save()
        response['msg'] = "修改成功"
        response['error_num'] = 0
    except:
        try:
            stu = Student.objects.get(_id=stu_id)
            note = {}
            note['title'] = title
            note['content'] = content
            note['edit_date'] = str(datetime.datetime.today().date())
            note['pk'] = len(stu.notes)
            stu.notes.append(note)
            stu.save()
            response['note'] = note
            response['msg'] = "添加成功"
            response['error_num'] = 0
        except Exception as e:
            response['msg'] = "添加失败:" + str(e)
            response['error_num'] = 1
    return JsonResponse(response)


def get_notes(request):
    response = {}
    try:
        stu = Student.objects.get(_id=request.GET.get('stu_id'))
        response["notes"] = stu.notes
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败：" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def erase_note(request):
    response = {}
    try:
        pk = int(request.GET.get('pk'))
        id = request.GET.get('id')
        stu = Student.objects.get(_id=id)
        stu.notes.pop(pk)
        for i in range(len(stu.notes) - pk):
            stu.notes[i + pk]['pk'] = stu.notes[i + pk]['pk'] - 1
        stu.save()
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_paper_by_year(request):
    response = {}
    try:
        year = request.GET.get('year')
        response['question'] = []
        for q in Question.objects.all():
            if q.source == str(year) + "数学全国一卷高考真题":
                new_q = {}
                new_q["id"] = str(q._id)
                new_q["description"] = q.description
                new_q["category"] = q.category
                new_q["difficulty"] = q.difficulty
                new_q["picture"] = str(q.picture)
                new_q["answer"] = str(q.answer)
                new_q["answer_picture"] = str(q.answer_picture)
                new_q["question_class"] = str(q.question_class)
                new_q["subject"] = str(q.subject)
                if q.question_class == "choice":
                    new_q["choice"] = []
                    new_q2 = {}
                    new_q2["A"] = str(q.choice[0])
                    new_q2["B"] = str(q.choice[1])
                    new_q2["C"] = str(q.choice[2])
                    new_q2["D"] = str(q.choice[3])
                    new_q["choice"].append(new_q2)
                response['question'].append(new_q)
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败:" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_train_done(request):
    response = {}
    name = request.GET.get('name')
    try:
        stu = Student.objects.get(_id=request.GET.get('stu_id'))
        q_num = int(request.GET.get('q_num'))
        start_time = datetime.datetime.fromtimestamp(int(request.GET.get('start_time')) / 1000.0)
        time = datetime.datetime.today().now()
        done_list = request.GET.get('q_id')
        done_list = done_list.replace('[', '')
        done_list = done_list.replace(']', '')
        done_list = done_list.replace('"', '')
        done_list = done_list.split(',')
        wrong = request.GET.get('wrong')
        wrong = wrong.replace('[', '')
        wrong = wrong.replace(']', '')
        wrong = wrong.replace('"', '')
        wrong = wrong.split(',')
        for i in range(0, q_num):
            new_done = {}
            new_done['wrong'] = int(wrong[i])
            new_done['id'] = done_list[i]
            new_done['time'] = time
            new_done['checked'] = 0
            new_done['pk'] = len(stu.dones)
            stu.dones.append(new_done)
        new_train = {}
        if name:
            new_train['name'] = name
        else:
            new_train['name'] = "生成试卷"
        new_train['time'] = time
        new_train['questions'] = done_list
        new_train['train_time'] = (time - start_time).seconds
        stu.trains.append(new_train)
        stu.save()
        response['msg'] = "添加成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "添加失败:" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_trains(request):
    response = {}
    try:
        stu = Student.objects.get(_id=request.GET.get('stu_id'))
        response['trains'] = stu.trains
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败：" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def make_paper(request):
    response = {}
    try:
        tec = Teacher.objects.get(_id=request.GET.get('tec_id'))
        name = request.GET.get('name')
        author = request.GET.get('author')
        q_num = int(request.GET.get('q_num'))
        time = datetime.datetime.today().now()
        q_id = request.GET.get('q_id')
        q_id = q_id.replace('[', '')
        q_id = q_id.replace(']', '')
        q_id = q_id.replace('"', '')
        q_id = q_id.split(',')
        q_list = list()
        for i in range(0, q_num):
            new_q = {}
            q = Question.objects.get(_id=q_id[i])
            new_q['id'] = q_id[i]
            new_q['source'] = q.source
            new_q['des'] = q.description
            new_q['ans'] = q.answer
            new_q['qc'] = q.question_class
            if new_q['qc'] == 'choice':
                new_q['cho'] = q.choice
            q_list.append(new_q)
        new_paper = {}
        new_paper['author'] = author
        new_paper['name'] = name
        new_paper['time'] = time
        new_paper['questions'] = q_list
        tec.papers.append(new_paper)
        tec.save()
        response['msg'] = "添加成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "添加失败:" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def find_paper(request):
    response = {}
    try:
        tec = Teacher.objects.get(_id=request.GET.get('tec_id'))
        response['papers'] = tec.papers
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败：" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_wrongs(request):
    response = {}
    try:
        stu = Student.objects.get(_id=request.GET.get('id'))
        response['list'] = list()
        for i in stu.dones:
            if (str(i['wrong']) == '1'):
                q = Question.objects.get(_id=i['id'])
                i['description'] = q.description
                i['question_class'] = q.question_class
                i['choice'] = q.choice
                i['source'] = q.source
                i['answer'] = q.answer
                response['list'].append(i)
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_static_info(request):
    response = {}
    try:
        stu = Student.objects.get(_id=request.GET.get('id'))
        now = datetime.datetime.today().now()
        lastday = datetime.datetime(now.year, now.month, now.day)
        lastweek = datetime.datetime(now.year, now.month, now.day) - datetime.timedelta(days=now.weekday())
        lastmonth = datetime.datetime(now.year, now.month, 1)
        lastyear = datetime.datetime(now.year, 1, 1)
        response['train_time_lastday'] = 0
        response['train_time_lastweek'] = 0
        response['train_time_lastmonth'] = 0
        response['train_time_lastyear'] = 0
        response['trains_lastday'] = 0
        response['train_questions_lastday'] = 0
        response['wrong_lastday'] = 0
        response['right_lastday'] = 0
        response['trains_lastweek'] = 0
        response['train_questions_lastweek'] = 0
        response['wrong_lastweek'] = 0
        response['right_lastweek'] = 0
        response['trains_lastmonth'] = 0
        response['train_questions_lastmonth'] = 0
        response['wrong_lastmonth'] = 0
        response['right_lastmonth'] = 0
        response['trains_lastyear'] = 0
        response['train_questions_lastyear'] = 0
        response['wrong_lastyear'] = 0
        response['right_lastyear'] = 0
        response['checked_lastday'] = 0
        response['checked_lastweek'] = 0
        response['checked_lastmonth'] = 0
        response['checked_lastyear'] = 0
        tables = ['accuracy', 'train_time', 'trains', 'train_questions']
        tags = ['lastday', 'lastweek', 'lastmonth', 'lastyear']
        tag = 0
        for i in stu.trains:
            if i['time'] > lastday:
                tag = 0
                response['train_time_' + tags[tag]] = response['train_time_' + tags[tag]] + i['train_time']
                response['trains_' + tags[tag]] = response['trains_' + tags[tag]] + 1
            if i['time'] > lastweek:
                tag = 1
                response['train_time_' + tags[tag]] = response['train_time_' + tags[tag]] + i['train_time']
                response['trains_' + tags[tag]] = response['trains_' + tags[tag]] + 1
            if i['time'] > lastmonth:
                tag = 2
                response['train_time_' + tags[tag]] = response['train_time_' + tags[tag]] + i['train_time']
                response['trains_' + tags[tag]] = response['trains_' + tags[tag]] + 1
            if i['time'] > lastyear:
                tag = 3
                response['train_time_' + tags[tag]] = response['train_time_' + tags[tag]] + i['train_time']
                response['trains_' + tags[tag]] = response['trains_' + tags[tag]] + 1
        for i in stu.dones:
            if i['time'] > lastday:
                tag = 0
                if str(i['wrong']) == '0': response['wrong_' + tags[tag]] = response['wrong_' + tags[tag]] + 1;
                if str(i['wrong']) == '1': response['right_' + tags[tag]] = response['right_' + tags[tag]] + 1;
                if i['checked'] == 1: response['checked_' + tags[tag]] = response['checked_' + tags[tag]] + 1;
                response['train_questions_' + tags[tag]] = response['train_questions_' + tags[tag]] + 1
            if i['time'] > lastweek:
                tag = 1
                if str(i['wrong']) == '0': response['wrong_' + tags[tag]] = response['wrong_' + tags[tag]] + 1;
                if str(i['wrong']) == '1': response['right_' + tags[tag]] = response['right_' + tags[tag]] + 1;
                if i['checked'] == 1: response['checked_' + tags[tag]] = response['checked_' + tags[tag]] + 1;
                response['train_questions_' + tags[tag]] = response['train_questions_' + tags[tag]] + 1
            if i['time'] > lastmonth:
                tag = 2
                if str(i['wrong']) == '0': response['wrong_' + tags[tag]] = response['wrong_' + tags[tag]] + 1;
                if str(i['wrong']) == '1': response['right_' + tags[tag]] = response['right_' + tags[tag]] + 1;
                if i['checked'] == 1: response['checked_' + tags[tag]] = response['checked_' + tags[tag]] + 1;
                response['train_questions_' + tags[tag]] = response['train_questions_' + tags[tag]] + 1
            if i['time'] > lastyear:
                tag = 3
                if str(i['wrong']) == '0': response['wrong_' + tags[tag]] = response['wrong_' + tags[tag]] + 1;
                if str(i['wrong']) == '1': response['right_' + tags[tag]] = response['right_' + tags[tag]] + 1;
                if i['checked'] == 1: response['checked_' + tags[tag]] = response['checked_' + tags[tag]] + 1;
                response['train_questions_' + tags[tag]] = response['train_questions_' + tags[tag]] + 1
        for i in tags:
            if response['right_' + i] + response['wrong_' + i] == 0:
                response['accuracy_' + i] = 0.0
            else:
                response['accuracy_' + i] = float(response['right_' + i]) / float(
                    response['right_' + i] + response['wrong_' + i]) * 100.0
        for i in tags:
            if response['wrong_' + i] == 0:
                response['checked' + i] = 100.0
            else:
                response['checked' + i] = float(response['checked_' + i]) / float(
                    response['wrong_' + i]) * 100.0
        for c_id in stu.classes:
            stu_class = Class.objects.get(_id=c_id)
            tag = -1
            index = 0
            for i in stu_class.rank:
                if i['student_number'] == stu.student_number:
                    tag = index
                    break
                index = index + 1
            if tag != -1:
                stu_class.rank[tag] = response
                stu_class.rank[tag]['student_number'] = stu.student_number
                stu_class.rank[tag]['name'] = stu.name
            else:
                stu_class.rank.append(response)
                stu_class.rank[len(stu_class.rank) - 1]['student_number'] = stu.student_number
                stu_class.rank[len(stu_class.rank) - 1]['name'] = stu.name
        stu_class.save()
        response['rank_list'] = sorted(stu_class.rank, key=my_functools.train_time_lastmonth)  # 默认按当周训练时间排名
        tag = -1
        index = 0
        for i in response['rank_list']:
            if i['student_number'] == stu.student_number:
                tag = index
                break
            index = index + 1
        response['rank'] = len(response['rank_list']) - tag
        response['week_done'] = []
        for d in range(1, 8):
            total = 0
            for i in stu.dones:
                if (lastweek + datetime.timedelta(days=d - 1)) < i['time'] < (lastweek + datetime.timedelta(days=d)):
                    total = 1 + total
            response['week_done'].append(total)
        # for i in stu.dones:
        #     if i['time'] > lastday:
        # for i in tables:
        #     for j in tags:
        #         print("rank_"+i+'_'+j+": 0,")
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def send_paper(request):
    response = {}
    try:
        tec = Teacher.objects.get(_id=request.GET.get('id'))
        paper_index = int(request.GET.get('paper_index'))
        class_index = int(request.GET.get('class_index'))
        duration = int(request.GET.get('duration'))
        cla = Class.objects.get(_id=tec.classes[class_index])
        new_json = {}
        new_json['time'] = datetime.datetime.today().now()
        new_json['paper'] = tec.papers[paper_index]
        new_json['duration'] = duration
        cla.papers.append(new_json)
        cla.save()
        response['msg'] = "发送成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "发送失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def send_file(request):
    response = {}
    try:
        tec = Teacher.objects.get(_id=request.GET.get('id'))
        file_index = int(request.GET.get('file_index'))
        class_index = int(request.GET.get('class_index'))
        cla = Class.objects.get(_id=tec.classes[class_index])
        new_json = {}
        new_json['time'] = datetime.datetime.today().now()
        new_json['file'] = tec.files[file_index]
        cla.files.append(new_json)
        cla.save()
        response['msg'] = "发送成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "发送失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def save_file(request):
    response = {}
    id = request.POST.get('id')
    file = request.FILES.get("file", None)
    if file is None:
        response['msg'] = "上传资料失败"
        response['error_num'] = 1
    else:
        file_name = str(file)
        if file_name.split('.')[-1].lower() in ['pdf']:
            try:
                tea = Teacher.objects.get(_id=id)
                if not os.path.isdir(PATH + id):
                    os.makedirs(PATH + id)
                # 删掉下面的2
                if not os.path.isdir(PATH2 + id):
                    os.makedirs(PATH2 + id)
                file_path = "/static/file/{}/{}".format(id, file_name)
                default_storage.save(PATH + "{}/{}".format(id, file_name), file)
                # 删掉下面的2
                default_storage.save(PATH2 + "{}/{}".format(id, file_name), file)
                f = {}
                f['name'] = file_name
                f['path'] = file_path
                f['edit_date'] = str(datetime.datetime.today().date())
                tea.files.append(f)
                tea.save()
                response['msg'] = "上传资料成功"
                response['error_num'] = 0
            except Exception as e:
                response['msg'] = "上传资料失败"
                response['error_num'] = 1
    return JsonResponse(response)


def get_files(request):
    response = {}
    try:
        tea = Teacher.objects.get(_id=request.GET.get('tea_id'))
        response["files"] = tea.files
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败：" + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def erase_file(request):
    response = {}
    try:
        tea_id = request.GET.get('tea_id')
        file_id = request.GET.get('file_id')
        db.teacher.update({"_id": tea_id}, {"$pull": {"id": file_id}})
        response['msg'] = "删除资料成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "删除资料失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_classes(request):
    response = {}
    id = request.GET.get('tec_id')
    try:
        tea = Teacher.objects.get(_id=id)
        class_names = []
        if len(tea.classes) > 0:
            for class_id in tea.classes:
                class_name = Class.objects.get(_id=class_id).name
                class_names.append(class_name)
        response['classes'] = class_names
        response['msg'] = "获取班级成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "获取班级失败"
        response['error_num'] = 1
    return JsonResponse(response)


def get_class_papers(request):
    response = {}
    id = request.GET.get('id')
    try:
        stu = Student.objects.get(_id=id)
        papers = []
        if len(stu.classes) > 0:
            for class_id in stu.classes:
                class_papers = Class.objects.get(_id=class_id).papers
                papers.extend(class_papers)
        response['papers'] = papers
        response['msg'] = "获取班级试卷成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "获取班级试卷失败"
        response['error_num'] = 1
    return JsonResponse(response)


def get_class_files(request):
    response = {}
    id = request.GET.get('id')
    try:
        stu = Student.objects.get(_id=id)
        files = []
        if len(stu.classes) > 0:
            for class_id in stu.classes:
                class_files = Class.objects.get(_id=class_id).files
                files.extend(class_files)
        response['files'] = files
        response['msg'] = "获取班级资料成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "获取班级资料失败"
        response['error_num'] = 1
    return JsonResponse(response)


def get_static_info_by_class(request):
    response = {}
    try:
        cla = Class.objects.get(_id=request.GET.get('id'))
        response['rank_list'] = sorted(cla.rank, key=my_functools.train_time_lastmonth)  # 默认按当周训练时间排名
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_classes_id(request):
    response = {}
    try:
        tec = Teacher.objects.get(_id=request.GET.get('id'))
        response['classes_id'] = tec.classes
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)


def get_paper_by_category(request):
    response = {}
    try:
        cates = int(request.GET.get('pow'))
        difficulty = int(request.GET.get('difficulty'))
        if difficulty == 0:
            maxd = 3
            mind = 1
        if difficulty == 1:
            maxd = 4
            mind = 1
        if difficulty == 2:
            maxd = 4
            mind = 2
        questions = Question.objects.all()
        ready_to_choose = list()
        for q in questions:
            if mind <= q.difficulty <= maxd and my_functools.include_point(cates,q.category) and q.question_class == "choice":
                new_question = {}
                new_question['des'] = q.description
                new_question['ans'] = q.answer
                new_question['source'] = q.source
                new_question['pub_date'] = q.pub_date
                new_question['category'] = q.category
                new_question['qc'] = q.question_class
                new_question['difficulty'] = q.difficulty
                new_question["cho"] = q.choice
                new_question['relative'] = my_functools.relate(q.category,cates)
                ready_to_choose.append(new_question)
        response['paper'] = sorted(random.sample(sorted(ready_to_choose,key=my_functools.relative_sort)[:20],12),key=my_functools.difficulty_sort)
        response['msg'] = "查询成功"
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = "查询失败: " + str(e)
        response['error_num'] = 1
    return JsonResponse(response)
