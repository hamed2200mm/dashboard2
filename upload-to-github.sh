#!/bin/bash

# تهيئة git
git init
git config user.name "hamed2200mm"
git config user.email "hamed2200mm@users.noreply.github.com"

# إضافة كل الملفات والالتزام الأول
git add .
git commit -m "أول رفع لمشروع Tiktok Shopping"

# ربط المستودع البعيد والدفع
git remote add origin https://github.com/hamed2200mm/tiktok-shopping.git
git branch -M main
git push -u origin main
