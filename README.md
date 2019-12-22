# D.E.I. Course Management System

The existing D.E.I. CMS website serves various purposes such as student registration, viewing marks breakdown in various subjects as well as allowing teachers to upload/edit marks related to their subject.

However, it has a number of limitations, the primary one being its use of outdated technology Adobe Flash. The use of 
Flash prevents easy access of the website, especially from mobile or tablet devices (since most browsers have outright
banned the use of Flash). Also, it is old and clunky and has a bad User Interface (UI).

This project is an effort to redesign the website using HTML5 and CSS3 to give it a modern look and feel.

## Features

### Student 

- Login using roll no. and date of birth
- Fees Payment (first time / continuing)
- Student Registration (first time / continuing)
- Download Registration Report
- View marks by subject
- View semester and yearly reports

### Teacher (Administrator)

- Login using user id and password
- Upload/edit marks by subject
- Sort/(Manipulate using Excel Formulae) student marks
- View fee payment data for current semester

## Dependencies
- Font Awesome 5 (hosted by cdnjs.cloudflare.com)

## Issues
- Unnecessary vertical scrollbar appearing on page (overflow:hidden cannot be used as it causes other things to break)