# Generated by Django 3.0 on 2021-07-17 07:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MandiData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.CharField(max_length=500)),
                ('state', models.CharField(max_length=500)),
                ('district', models.CharField(max_length=500)),
                ('market', models.CharField(max_length=500)),
                ('commodity', models.CharField(max_length=500)),
                ('variety', models.CharField(max_length=500)),
                ('arrival_date', models.CharField(max_length=500)),
                ('min_price', models.CharField(max_length=500)),
                ('max_price', models.CharField(max_length=500)),
                ('modal_price', models.CharField(max_length=500)),
            ],
        ),
    ]