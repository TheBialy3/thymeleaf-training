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
    @GetMapping("/main")
    public String getMain(Model model) {
        setCars();
        model.addAttribute("name", "karol");
        model.addAttribute("cars", cars);

        return "main";
    }

    @GetMapping("/projects")
    public String getProjects(Model model) {
        model.addAttribute("name", "karol");
        return "projects";
    }

    @GetMapping("/ideas")
    public String getIdeas(Model model) {
        model.addAttribute("name", "karol");

        return "projectTemplate/ideas";
    }
    @GetMapping("/java")
    public String getJava(Model model) {
        model.addAttribute("name", "karol");

        return "projectTemplate/java";
    }
    @GetMapping("/unity")
    public String getUnity(Model model) {
        model.addAttribute("name", "karol");

        return "projectTemplate/unity";
    }
    @GetMapping("/about")
    public String getAbout(Model model) {
        model.addAttribute("name", "karol");

        return "about";
    }
    @GetMapping("/contactMe")
    public String getContactMe(Model model) {
        model.addAttribute("name", "karol");

        return "contactMe";
    }
    @GetMapping("/portfolio")
    public String getPortfolio(Model model) {
        model.addAttribute("name", "karol");

        return "projectTemplate/portfolio";
    }

    @GetMapping("/all")
    public String getAll(Model model) {
        model.addAttribute("name", "karol");

        return "allSections";
    }
}
