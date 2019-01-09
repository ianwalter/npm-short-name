workflow "CI" {
  on = "push"
  resolves = ["Test"]
}

action "Install" {
  uses = "docker://node:11-alpine"
  runs = "yarn"
}

action "Test" {
  uses = "docker://node:11-alpine"
  needs = ["Install"]
  runs = "yarn"
  args = "test"
}
