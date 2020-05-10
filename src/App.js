import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div class="container">
    <div class="frame">
      <section class="header">
        <button class="header-btn">TAMBAH</button>
        <h1 class="header-title">Catatan Kerja</h1>
        <button class="header-btn main-red-color">HAPUS</button>
      </section>

      <section class="add">
        <form class="add-form">
          <input type="text" class="add-input" />
          <button class="add-btn main-black-color">TAMBAH</button>
        </form>
      </section>

      <section class="todos">
        <div class="todo">
          <span class="todo-text">Belajar react</span>
        </div>
        <div class="todo">
          <span class="todo-text">Belajar react</span>
        </div>
        <div class="todo">
          <span class="todo-text">Belajar react</span>
        </div>
        <div class="todo">
          <span class="todo-text">Belajar react</span>
        </div>
        <div class="todo">
          <span class="todo-text">Belajar react</span>
        </div>
        <div class="todo">
          <span class="todo-text">Belajar react</span>
        </div>
        <div class="todo">
          <span class="todo-text">Belajar react</span>
        </div>
        <div class="todo">
          <span class="todo-text">Belajar react</span>
        </div>
        <div class="todo">
          <span class="todo-text">Belajar react</span>
        </div>
        <div class="todo">
          <span class="todo-text">Belajar react</span>
        </div>
      </section>
    </div>
  </div>
  );
}
