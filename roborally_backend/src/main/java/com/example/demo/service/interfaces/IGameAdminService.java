package com.example.demo.service.interfaces;

import com.example.demo.exceptions.DaoException;
import com.example.demo.exceptions.ServiceException;
import com.example.demo.model.admin.Game;
import com.example.demo.model.admin.User;

import java.util.Collection;
import java.util.List;

public interface IGameAdminService {
    Collection<Game> getGames() throws ServiceException, DaoException;
 int saveGame(Game game) throws ServiceException, DaoException;
    User validateUser(String name) throws ServiceException, DaoException;
    void saveUser(User user) throws ServiceException, DaoException;
    Collection<User> getUsers() throws ServiceException, DaoException;
}
