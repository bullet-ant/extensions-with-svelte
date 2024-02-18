<script>
  import { onMount, onDestroy } from "svelte";
  import { v4 as uuidv4 } from "uuid";

  let todos = [];
  let newTodo = {
    id: uuidv4(),
    task: "",
    isCompleted: false,
  };
  let showTodos = false;

  const addTodo = () => {
    if (newTodo.task.trim() !== "") {
      todos = [...todos, { ...newTodo }];
      newTodo = {
        id: uuidv4(),
        task: "",
        isCompleted: false,
      };
    }
  };

  const removeTodo = (index) => {
    todos = todos.filter((_, i) => i !== index);
  };

  const toggleShowTodos = () => {
    event.stopPropagation();
    showTodos = !showTodos;
  };

  const toggleTodoCompletion = (index) => {
    todos[index].isCompleted = !todos[index].isCompleted;
  };
  const hideTodos = () => {
    showTodos = false;
  };

  onMount(() => {
    window.addEventListener("click", hideTodos);
  });

  onDestroy(() => {
    window.removeEventListener("click", hideTodos);
  });
</script>

<div class="todos">
  <button class="todos-button" on:click={toggleShowTodos}>Todos</button>

  {#if showTodos}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="todos-popup" on:click|stopPropagation>
      <form on:submit|preventDefault={addTodo} class="todos-input">
        <input
          type="text"
          bind:value={newTodo.task}
          placeholder="What's our main focus today?"
        />
      </form>
      <ul>
        {#each todos as todo, index (todo.id)}
          <li>
            <button
              class="todo-item"
              class:completed={todo.isCompleted}
              on:click={() => toggleTodoCompletion(index)}
            >
              {todo.task}
            </button>
            <button on:click={() => removeTodo(index)}>
              <img
                src="images/delete.png"
                alt="Delete todo"
                width="18px"
                height="18px"
              />
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .todos {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
  }

  .todos-button {
    position: relative;
  }
  .todos-button:hover::before {
    content: "";
    position: absolute;
    top: -3px;
    bottom: -3px;
    left: -3px;
    right: -3px;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: -1;
  }

  .todos-popup {
    position: absolute;
    top: 2.5rem;
    right: 1rem;
    border-radius: 0.3rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    min-width: 20rem;
    max-width: 20rem;
  }

  .todos-input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  input {
    /* remove default input styles */
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #fff;
    color: #fff;
    outline: none;
    font-size: 1rem;
    width: 100%;
    padding: 0 0 4px 4px;
  }

  .todo-item {
    text-align: start;
  }

  .todo-item:hover {
    text-decoration: line-through;
  }

  button {
    /* remove default button styles */
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
  }

  ul {
    list-style-type: none;
    font-size: 1rem;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    overflow-wrap: anywhere;
  }

  li:first-child {
    margin-top: 20px;
  }

  .completed {
    text-decoration: line-through;
    opacity: 0.5;
    transition: all 0.3s ease;
  }
</style>
