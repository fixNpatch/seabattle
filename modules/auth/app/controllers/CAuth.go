package controllers


import (
	"fmt"
	"github.com/revel/revel"
)


type CAuth struct {
	*revel.Controller
}

func (c CAuth) Index() revel.Result {
	return nil
}


func (c CAuth) CheckAuth() revel.Result {
	fmt.Println("I Got triggered")
	return nil
}

