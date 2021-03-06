# Generated by Django 3.0.5 on 2020-09-23 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Class',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=10)),
                ('description', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('description', models.CharField(max_length=200)),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
                ('category', models.IntegerField(default=0)),
                ('answer', models.CharField(max_length=100)),
                ('question_class', models.CharField(max_length=20)),
                ('subject', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='School',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('description', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=10)),
                ('account', models.CharField(max_length=25)),
                ('password', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=10)),
                ('description', models.CharField(max_length=200)),
                ('Classes', models.ManyToManyField(to='server.Class')),
            ],
        ),
    ]
