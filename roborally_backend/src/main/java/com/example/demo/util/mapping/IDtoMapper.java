package com.example.demo.util.mapping;

import com.example.demo.controller.GameController.*;
import com.example.demo.exceptions.MappingException;
import com.example.demo.model.Board;
import com.example.demo.model.Player;
import com.example.demo.model.Space;
import com.example.demo.model.admin.Game;
import com.example.demo.model.admin.User;

public interface IDtoMapper {
    PlayerDto convertToDto(Player player) throws MappingException;

    BoardDto convertToDto(Board board) throws MappingException;

    SpaceDto convertToDto(Space space) throws MappingException;

    UserDto convertToDto(User user) throws MappingException;

    Game convertToEntity(GameDto gameDto);

    User convertToEntity(UserDto userDto);

    Board convertToEntity(BoardDto boardDto);

    Space convertToEntity(SpaceDto spaceDto, Board board);

    Player convertToEntity(PlayerDto playerDto, Board board) throws MappingException;

    GameDto convertToDto(Game game) throws MappingException;
}
