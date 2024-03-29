# Generated by Django 3.0 on 2021-09-04 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='NSEData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('file_data', models.FileField(upload_to='nse_zip_file')),
                ('is_processed', models.BooleanField(default=True)),
            ],
        ),
    ]
