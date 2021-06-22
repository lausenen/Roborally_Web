package com.example.demo.dal.interfaces;

import com.example.demo.exceptions.DaoException;
import com.example.demo.exceptions.ServiceException;
import com.example.demo.model.admin.User;

import java.util.Collection;

public interface IUserDao  {
    Collection<User> getUsers() throws DaoException, ServiceException;

    void createUser(User user)throws DaoException, ServiceException;
}
