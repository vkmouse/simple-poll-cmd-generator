package main

import (
	"simple-poll-cmd-generator/routes"
)

func main() {
	router := routes.Setup("templates", "static")
	router.Run(":8080")
}
