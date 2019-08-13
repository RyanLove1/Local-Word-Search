from django.shortcuts import render
from django.http import HttpResponse
from . import models

# Create your views here.


def word(request):
    if request.method == "GET":
        return render(request, "register.html")
    elif request.method == "POST":
        word = request.POST.get("word","null")
        word = word.strip()
        if word == "":
            return render(request, "register.html")
        else:
            # print("要查的单词",word)
            db_result = models.WordList.objects.values("word", "inter")
            for item in db_result:
                if item["word"] == word:
                    explain = item["inter"]
                    # print(explain)
                    return render(request, "register.html", {"word": word, "explain": explain})
            else:
                explain = "你要查的这个单词不存在!"
                return render(request, "register.html", {"word": word, "explain": explain})





