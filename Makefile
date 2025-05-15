# Makefile

# Docker Compose File (gerekirse değiştirilebilir)
COMPOSE_FILE=docker-compose.yml

# Konteyneri durdur ve sil
down:
	docker-compose -f $(COMPOSE_FILE) down

# Önbelleksiz build yap
build:
	docker-compose -f $(COMPOSE_FILE) build --no-cache

# Sadece imajı yeniden oluştur (önbellekli)
rebuild:
	docker-compose -f $(COMPOSE_FILE) build

# Uygulamayı başlat
up:
	docker-compose -f $(COMPOSE_FILE) up

# Arka planda başlat
up-detached:
	docker-compose -f $(COMPOSE_FILE) up -d

# Tam temiz başlangıç
reset:
	docker-compose -f $(COMPOSE_FILE) down
	docker-compose -f $(COMPOSE_FILE) build --no-cache
	docker-compose -f $(COMPOSE_FILE) up

# Logları göster
logs:
	docker-compose -f $(COMPOSE_FILE) logs -f

# Hangi konteynerler çalışıyor?
ps:
	docker-compose -f $(COMPOSE_FILE) ps
