from django.db import models

# Create your models here.


class WordList(models.Model):
    word = models.CharField("单词", max_length=50, null=True)
    inter = models.CharField('解释', max_length=256, null=True)

