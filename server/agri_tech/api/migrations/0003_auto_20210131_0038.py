# Generated by Django 3.1.5 on 2021-01-31 00:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210131_0033'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='id',
            new_name='uid',
        ),
    ]