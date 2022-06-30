async function autoType() {
    const list = [
        "برنامه نویسی با سیستم node.js",
        "برنامه نویسی برای دستگاه های موبایلی با flutter",
        "برنامه نویسی اندروید به وسیله kotlin و java",
        "برنامه نویسی با زبان java",
        "انجام پروژه ها به وسیله فریم ورک nest.js و express",
        "طراحی وب به وسیله html و css",
        "برنامه نویسی frontend به وسیله react js",
        "پایگاه داده های غیر رابطه ای Mongodb",
        "پایگاه داده های رابطه ای Postgresql"
    ];
    let i = 0;
    while (true) {
        if (i === list.length - 1){
            i = 0;
        }else {
            i++;
        }
        const text = list[i];
        for (let i = 0; i < text.length; i++) {
            document.getElementById("test-tag").innerHTML += text.charAt(i);
            await new Promise(resolve => setTimeout(resolve, 75));
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        for (let i = 0; i < text.length; i++) {
            const str = document.getElementById("test-tag").innerHTML;
            document.getElementById("test-tag").innerHTML = str.slice(0, str.length - 1);
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }
}