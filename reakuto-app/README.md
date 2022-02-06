## 環境構築

1. コンテナのbuild, start

    `docker compose up -d`

2. コンテナの操作

    `docker exec -it reakuto bash`

3. コンテナのnode環境を利用してcra実行

    `npx create-react-app reakuto-app --template=typescript`

* コンテナの実行ユーザをDockerfileでnode(UID=1000,GID=1000)に設定している
    * Dockerホスト側から一般ユーザ(UID=1000,GID=1000)でReactプロジェクトをさわるため
    * nodeではなくrootで実行すると、ボリュームマウントしているディレクトリ含めてroot権限になるので一般ユーザ権限では更新できなくなる

4. Reactプロジェクトのルートフォルダに移動

    `cd reakuto-app`

5. ローカルサーバ立ち上げ

    `npm run start`