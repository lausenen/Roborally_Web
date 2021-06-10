package com.example.demo.controller.GameController;

import com.example.demo.model.admin.User;

import java.util.ArrayList;
import java.util.List;

public class GameDto {
    public String name;
    public int id;
    public boolean started;
    public List<User> users = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isStarted() {
        return started;
    }

    public void setStarted(boolean started) {
        this.started = started;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
