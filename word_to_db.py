import pymysql
import re

db = pymysql.connect(host="localhost",port=3306,user="root",password="123456",database="words",charset="utf8")
cur = db.cursor()

fd = open("word.txt")
sql = "insert into word_wordlist(word, inter) value(%s, %s)"

for line in fd:
    tmp = re.findall(r"(\w*)\s(.*)", line)[0]
    print(tmp)
    try:
        cur.execute(sql, tmp)
        db.commit()
    except Exception:
        db.rollback()
fd.close()
db.close()
cur.close()