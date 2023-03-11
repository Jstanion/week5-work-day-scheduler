# Week5 - Work Day Scheduler

## Description

This project allows users to add events for the work day based on a 7 hour range. The time-blocks are color coded to make it easier to determine whether each task is in the past, present, or future hour of the current day. I used JQuery to create dynamic changes to each section of the scheduler and change the color accordingly. I also set teh time-blocks to store the user input locally so when the page refreshes, the user input is still visible in the assigned time-block. Bootstrap and CSS were both used in tandem to give the page style and structure.

This project helped strengthen my knowledge of Jquery through traversing the DOM to select specific elements within a container by class and ID. I also became much more comfortable using (this) in JQuery to select the same class or ID in a function, making it much quicker to write functions and easier to read. Finally, revisiting local storage from week 4 I was able to incorporate previous lessons in a more efficient manner to call user input data.

## Screenshot

![Image of initial page load](assets/screenshot.png)

## Resources

<https://www.w3schools.com/jquery/>

I used this StackOverflow link to help trouble shoot my issues with local storage:
<https://stackoverflow.com/questions/73565932/i-have-added-a-local-storage-function-but-it-doesnt-seem-to-work-on-my-scheduler>

The dayjs function was pulled from the lesson we went over in class for units 25 & 26.

## License

Please refer to the license listed in the repository.

## Link to Deployed Live Site

<https://jstanion.github.io/week5-work-day-scheduler/>
