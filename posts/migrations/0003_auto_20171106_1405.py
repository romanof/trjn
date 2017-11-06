# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-06 14:05
from __future__ import unicode_literals

from django.db import migrations, models
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_remove_tag_posts'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='text',
            field=tinymce.models.HTMLField(),
        ),
        migrations.AlterField(
            model_name='tag',
            name='post_count',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
