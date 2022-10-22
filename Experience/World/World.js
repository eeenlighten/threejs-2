import * as THREE from 'three'
import Experience from "../Experience";

import Room from './Room';
import Environment from './Environment';


export default class World{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources; 
        // console.log(this.camera, this.camera.perspectiveCamera)
        
        this.resources.on("ready", ()=>{
            this.environment = new Environment();
            this.room = new Room();
            // console.log("created room")

        })

        
    }
    setRenderer(){

    }

    resize(){
 
    }

    update(){

    }
}