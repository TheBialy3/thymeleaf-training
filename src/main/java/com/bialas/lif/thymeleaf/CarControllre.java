package com.bialas.lif.thymeleaf;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class CarControllre {
    ArrayList<Car> cars = new ArrayList<>();

    public void setCars(){
        cars.add(new Car("BMW", "i8"));
        cars.add(new Car("Fiat", "126p"));
    }
    @GetMapping("/car")
    public String get(Model model) {
        setCars();
        model.addAttribute("name", "karol");
        model.addAttribute("cars", cars);

        return "main";
    }
}
