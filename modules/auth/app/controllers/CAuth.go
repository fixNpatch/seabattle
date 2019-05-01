package controllers

import (
	"errors"
	"fmt"
	"github.com/revel/revel"
	"seabattle/modules/auth/app/providers"
)


type CAuth struct {
	*revel.Controller
}

func (c *CAuth) Index() revel.Result {
	return c.Render()
}

func (c *CAuth) CheckAuth() revel.Result {
	fmt.Println("I Got triggered")
	login := c.Params.Form.Get("login")
	password := c.Params.Form.Get("password")

	if !checkLegal(login, password) {
		fmt.Println("Bad user")
		err := errors.New("can't log in. try again...")
		return c.RenderJSON(err.Error())
	}

	fmt.Println("ok")

	// Заглушка
	var session controllers.Session
	session.Hash = "123123123"
	// setCookies sessionHash


	return c.RenderJSON(session)
}

func checkLegal(login string, password string) bool {
	if login == "admin" && password == "123" {
		return true
	}
	return false
}