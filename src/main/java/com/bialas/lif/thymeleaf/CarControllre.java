package com.bialas.lif.thymeleaf;

import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CarControllre {

    @GetMapping("/car")
    public String get(Model model) {
        Car car = new Car("BMW", "i8");
        model.addAttribute("name", "karol");
        model.addAttribute("car", car);
        return "car";
    }
}
