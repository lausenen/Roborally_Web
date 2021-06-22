package com.example.demo.controller.GameController;

import com.example.demo.model.admin.User;

import java.util.ArrayList;
import java.util.List;

public class GameDto {
    public String name;
    public java.lang.Integer gameId;
    public boolean started;
    public java.lang.Integer numberOfUsers;
    public java.lang.Integer width;
    public java.lang.Integer height;
    public List<User> users = new ArrayList<>();

    public String getName() {
        return name;
    }

    public java.lang.Integer getNumberOfUsers() {
        return numberOfUsers;
    }

    public void setNumberOfUsers(java.lang.Integer numberOfUsers) {
        this.numberOfUsers = numberOfUsers;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
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
