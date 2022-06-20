package com.bialas.lif.thymeleaf;

import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
public class CarControllre {
    private List<Car> cars;

    public CarControllre(){
        Car car1 = new Car("BMW", "i8");
        Car car2 = new Car("KIA ", "CLARUS");
        Car car3 = new Car("Volvo", "V40 Cross Country");
        Car car4 = new Car("BENTLEY", "Continental");
        Car car5 = new Car("Skoda", "Superb");

        cars =new ArrayList<>();
        cars.add(car1);
        cars.add(car2);
        cars.add(car3);
        cars.add(car4);
        cars.add(car5);
    }

    @GetMapping("/car")
    public String getCar(Model model) {
        model.addAttribute("cars", cars);
        model.addAttribute("newCar", new Car());
        return "car";
    }

    @PostMapping("/add-car")
    public String addCar(@ModelAttribute Car car){
        cars.add(car);
        return "redirect:/car";
    }
}
