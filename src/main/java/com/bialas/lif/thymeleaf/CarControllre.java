package com.bialas.lif.thymeleaf;

import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class CarControllre {

    @GetMapping("/car")
    public String get(Model model) {
        Car car1 = new Car("BMW", "i8");
        Car car2 = new Car("KIA ", "CLARUS");
        Car car3 = new Car("Volvo", "V40 Cross Country");
        Car car4 = new Car("BENTLEY", "Continental");
        Car car5 = new Car("Skoda", "Superb");

        List<Car> cars = Arrays.asList(car1,car2,car3,car4,car5);

        model.addAttribute("name", "karol");
        model.addAttribute("cars", cars);
        return "car";
    }
}
