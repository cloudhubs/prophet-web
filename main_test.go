package main

import (
	"encoding/json"
	"net/http"
	"testing"
)

func TestGitServer(t *testing.T) {
	var newReq []byte
	newReq = newRequest("/url")
	if len(newReq) == 0 {
		t.Errorf("Conversion incorrect, got: %d, want more then: %d.", len(newReq), 0)
	}
}


type ProphetResponse struct {
	communication Communication
	contextMap struct{}
}

type Communication struct {
	edges []Edge
	nodes []Node
}

type Edge struct {
	idA string
	idB string
}

type Node struct {
	id string
}

func TestMainEndpoint(t *testing.T){
	//url := "/cloudhubs/tms"

	//bytes.NewBuffer(newRequest(url) )
	resp, err := http.Post("http://127.0.0.1:8080","json", nil )
	if err != nil {
		panic(err)
	}
	if err != nil {
		// handle error
	}
	defer resp.Body.Close()
	var p ProphetResponse
	json.NewDecoder(resp.Body).Decode(&p)
	if len(p.communication.edges) != 0 {
		t.Errorf("Communication edges, got: %d, want more then: %d.", len(p.communication.edges), 0)
	}

}


