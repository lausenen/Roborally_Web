package com.example.demo.model.admin;

import java.util.ArrayList;
import java.util.List;

public class Game {

    public String name;

    public Integer gameId;

    public boolean started;

    public Integer numberOfUsers;

    public List<User> users = new ArrayList<>();
}
