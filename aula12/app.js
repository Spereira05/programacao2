import Zoo from "./Zoo.js";
import AudioPlayer from "./audioPlayer.js"



window.onload = async () => {

    console.log(Zoo.Zooinfo());

    const request = await fetch("data.json");
    const result = await request.json();
    
    

    const zoo = new Zoo((animal) => {
        console.log("zoo event", animal)
        audioPlayer.play(animal.sound);
    });
    result.forEach(item => {
        zoo.addAnimal(item);
    });
    const audioPlayer = new audioPlayer();
    


}

