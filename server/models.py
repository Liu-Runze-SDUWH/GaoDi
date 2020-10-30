import datetime

from django.db import models

# Create your models here.
from django.utils import timezone
from mongoengine import *


class Question(Document):
    _id = ObjectIdField()
    source = StringField(max_length=30)
    description = StringField(max_length=200)
    pub_date = DateTimeField()
    difficulty = IntField(max_length=5)
    category = IntField(default=0)
    picture = StringField()
    answer = StringField(max_length=200)
    answer_picture = StringField()
    question_class = StringField(max_length=20)
    subject = StringField(max_length=10)
    choice = ListField(max_length=200)

    def __str__(self):
        return self.description


class Class(Document):
    _id = ObjectIdField()
    name = StringField(max_length=15)
    school_id = StringField()
    math_teacher_id = StringField()
    students = ListField()
    code = IntField()
    rank = ListField()
    papers = ListField()
    files = ListField()

    def __str__(self):
        return self.name


class Student(Document):
    _id = ObjectIdField()
    name = StringField(max_length=10)
    student_number = IntField(max_length=15)
    school_name = StringField(max_length=15)
    avatar = StringField()
    account = StringField(max_length=25)
    password = StringField(max_length=30)
    classes = ListField()
    dones = ListField()
    notes = ListField()
    trains = ListField()

    def __str__(self):
        return self.name


class School(Document):
    _id = ObjectIdField()
    name = StringField(max_length=10)
    classes = ListField()

    def __str__(self):
        return self.name


class Teacher(Document):
    _id = ObjectIdField()
    name = StringField(max_length=10)
    teacher_number = IntField(max_length=15)
    school_name = StringField(max_length=15)
    avatar = StringField()
    account = StringField(max_length=25)
    password = StringField(max_length=30)
    subject = StringField(max_length=10)
    classes = ListField()
    papers = ListField()
    files = ListField()

    def __str__(self):
        return self.name


class Admin(Document):
    _id = ObjectIdField()
    name = StringField(max_length=10)
    avatar = StringField()
    account = StringField(max_length=25)
    password = StringField(max_length=30)
    schools = ListField()

    def __str__(self):
        return self.name
