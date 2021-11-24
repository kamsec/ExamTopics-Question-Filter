## ExamTopics Question Filter

Simple extension to remove annoying text surrounding the questions on examtopics.com. Made for AZ-900, but it will work for other ones if there are identical strings displayed. You can always filter more strings by modyfing `script.js`.

### Download 
```
git clone git@github.com:kamsec/ExamTopics-Question-Filter.git
```

### Chrome

1. Go to `chrome://extensions`
2. Toggle on `Developer mode`
3. Click on `Load unpacked` and select the folder with `manifest.json`

### Firefox

1. Go to `about:debugging`
2. Click on `This Firefox`
3. Click on `Load Temporary Add-on`
4. Select any file of the extension


### Notes:
- Firefox removes temporary extensions on restart, so it's easier to use it with Chrome
- You can filter more strings by adding them to `unwantedStrings` array in `script.js`
- If you have some paid-plan which allows you to view more than 5 questions on page, you can increase default `5` value in `for` loop
