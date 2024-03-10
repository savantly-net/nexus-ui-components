PROJECT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
VERSION := $(shell cat VERSION)
TAGGED_VERSION := $(VERSION)
NEXT_VERSION := $(shell echo $(VERSION) | awk -F. '{$$NF = $$NF + 1;} 1' | sed 's/ /./g')

GIT_COMMIT := $(shell git rev-parse --short HEAD)


.PHONY: build
build:
	@echo "Building..."
	@pnpm build
	@echo "Done!"

.PHONY: ensure-git-repo-pristine
ensure-git-repo-pristine:
	@echo "Ensuring git repo is pristine"
	@[[ $(shell git status --porcelain=v1 2>/dev/null | wc -l) -gt 0 ]] && echo "Git repo is not pristine" && exit 1 || echo "Git repo is pristine"

.PHONY: bump-version
bump-version:
	@echo "Bumping version to $(NEXT_VERSION)"
	@echo $(NEXT_VERSION) > VERSION
	git add VERSION
	@sed -i '' 's/"version": ".*"/"version": "$(NEXT_VERSION)"/' package.json
	git add package.json
	git commit -m "Published $(VERSION) and prepared for $(NEXT_VERSION)"

.PHONY: publish
publish:
	@echo "Publishing..."
	pnpm publish --access public


.PHONY: release
release: ensure-git-repo-pristine build publish bump-version 
	@echo "Preparing release..."
	@echo "Version: $(VERSION)"
	@echo "Commit: $(GIT_COMMIT)"
	@echo "Image Tag: $(IMAGE_TAG)"
	git tag -a $(TAGGED_VERSION) -m "Release $(VERSION)"
	git push origin $(TAGGED_VERSION)
	@echo "Tag $(TAGGED_VERSION) created and pushed to origin"
	