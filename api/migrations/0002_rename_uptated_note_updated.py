# Generated by Django 4.2.1 on 2023-05-23 20:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='uptated',
            new_name='updated',
        ),
    ]
