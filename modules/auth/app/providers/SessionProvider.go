package controllers


type SessionProvider struct {}

type Session struct {
	Hash string `json:"session_hash"`
}