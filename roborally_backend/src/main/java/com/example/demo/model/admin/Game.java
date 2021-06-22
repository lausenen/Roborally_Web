package com.example.demo.model.admin;

import java.util.ArrayList;
import java.util.List;

public class Game {

    public String name;

    public java.lang.Integer gameId;

    public boolean started;

    public java.lang.Integer numberOfUsers;

    public List<User> users = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public java.lang.Integer getGameId() {
        return gameId;
    }

    public void setGameId(java.lang.Integer gameId) {
        this.gameId = gameId;
    }

    public boolean isStarted() {
        return started;
    }

    public void setStarted(boolean started) {
        this.started = started;
    }

    public java.lang.Integer getNumberOfUsers() {
        return numberOfUsers;
    }

    public void setNumberOfUsers(java.lang.Integer numberOfUsers) {
        this.numberOfUsers = numberOfUsers;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
    public void addUser(User user) {
        this.users.add(user);
    }
}
