//counter code
document.addEventListener("DOMContentLoaded",()=>
{
    function counter(id,start,end,duration)
    {
        let obj = document.getElementById(id),
        current = start,
        range = end-start,
        increment = end>start?1:-1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>
            {
                current+=increment;
                obj.textContent=current;
                if(current == end)
                    clearInterval(timer);
            },step)
    }
    counter("count1",0,1000,3000);
    counter("count2",200,2500,2000);
    counter("count3",300,2700,2890);
    counter("count4",400,2800,2090);
})