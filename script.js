
window.onload=function(){
    var unwantedStrings = ["Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.<br>",
                    "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.<br>",
                    "DRAG DROP -<br>Match the Azure service to the correct description.<br>Instructions: To answer, drag the appropriate Azure service from the column on the left to its description on the right. Each service may be used once, more than once, or not at all.<br>NOTE: Each correct selection is worth one point.<br>Select and Place:<br>",
                    "DRAG DROP -<br>Match the Azure services to the correct description.<br>Instructions: To answer, drag the appropriate Azure service from the column on the left to its description on the right. Each service may be used once, more than once, or not at all.<br>NOTE: Each correct selection is worth one point.<br>Select and Place:<br>",
                    "HOTSPOT -<br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br>NOTE: Each correct selection is worth one point.<br>Hot Area:<br>",
                    "HOTSPOT -<br>",
                    "To answer, select the appropriate options in the answer area.<br>NOTE: Each correct selection is worth one point.<br>Hot Area:<br>",
                    "DRAG DROP -<br>Match the term to the correct definition.<br>Instructions: To answer, drag the appropriate term from the column on the left to its description on the right. Each term may be used once, more than once, or not at all.<br>NOTE: Each correct match is worth one point.<br>Select and Place:<br>",
                    "DRAG DROP -<br>",
                    "Answer by dragging the correct option from the list to the answer area.<br>Select and Place:"]
    //console.log("Executing script.js (ExamTopics Question Filter)")
    if (document.body.innerHTML.indexOf("Reveal Solution") != -1) {
        //console.log("Clearing page content (ExamTopics Question Filter)")
        for (let i = 0; i < 10; i++) {
            unwantedStrings.map((str) => {document.body.innerHTML = document.body.innerHTML.replace(str, "")})
        };
    };
}
