package com.example.demo.dal.implementations;

import com.example.demo.dal.interfaces.IUserDao;
import com.example.demo.exceptions.DaoException;
import com.example.demo.exceptions.ServiceException;
import com.example.demo.model.admin.Game;
import com.example.demo.model.admin.User;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
@Repository
public class UserDao implements IUserDao {

    static final HashMap<Integer, User> users = new HashMap<>();
    static private int userIdCounter = 0;

    @Override
    public Collection<User> getUsers() throws DaoException, ServiceException {
        return users.values();
    }

    @Override
    public void createUser(User user) throws DaoException, ServiceException {
            if(user!= null){
                Integer userId = user.userId;
                if(userId != null) {
                    return;
                }
                else{
                    user.userId = ++userIdCounter;
                    if(user.displayName == null){
                        user.displayName = user.name;
                    }
                    users.put(user.userId, user);
                }
            }
    }
}
