package com.example.demo.dal.interfaces;

import com.example.demo.exceptions.DaoException;
import com.example.demo.model.admin.Game;

import java.util.Collection;
import java.util.List;

public interface IGameDao {
    int creatGame(Game game);
    Game getGame(int id);
    Collection<Game> getGames();
}
