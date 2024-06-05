let RunnerList = []
let addrunner = () => {
    let RunnerName = document.getElementById("RunnerName").value;
    let RunnerAge = document.getElementById("RunnerAge").value;
    let Earlylate = document.getElementById("Earlylate").value;
    if (RunnerAge && RunnerName) {
        if (Number(RunnerAge) > 18) {
            RunnerList.push({
                RunnerName, RunnerAge, RaceNumber: Earlylate === "early" ? Math.floor(Math.random() + 19 * 1000) : Math.floor(Math.random() + 17),
                RaceTime: Earlylate === "early" ? "9:30AM" : "11:00AM"
            })
        } else {
            RunnerList.push({
                RunnerName, RunnerAge, RaceNumber: Math.floor(Math.random() + 99),
                RaceTime: "12:30PM"
            })
        }
    } else {
        alert("please fill out the fields ")
    }
    document.getElementById("tbody").innerHTML = RunnerList.map((v, i) => {
        return ( `
            <tr>
    <td>${i + 1}</td>
    <td>${v.RunnerName}</td>
    <td>${v.RunnerAge}</td>
    <td>${v.RaceTime}</td>
    <td>${v.RaceNumber}</td>
</tr>`
        )
    }).join("")
}