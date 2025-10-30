<script lang="ts">
	import MenuBar from '$lib/ui/menu-bar/MenuBar.svelte';
	import Menu from '$lib/ui/menu-bar/Menu.svelte';
	import MenuTrigger from '$lib/ui/menu-bar/MenuTrigger.svelte';
	import MenuContent from '$lib/ui/menu-bar/MenuContent.svelte';
	import MenuItem from '$lib/ui/menu-bar/MenuItem.svelte';
	import SubMenu from '$lib/ui/menu-bar/SubMenu.svelte';
	import SubMenuContent from '$lib/ui/menu-bar/SubMenuContent.svelte';
	import SubMenuTrigger from '$lib/ui/menu-bar/SubMenuTrigger.svelte';
</script>

<div class="p-8">
	<MenuBar>
		<Menu>
			<MenuTrigger>Trigger</MenuTrigger>
			<MenuContent>
				<MenuItem>Item 1</MenuItem>
				<MenuItem>Item 2</MenuItem>
				<MenuItem>Item 3</MenuItem>
			</MenuContent>
		</Menu>
		<Menu>
			<MenuTrigger>Trigger 2</MenuTrigger>
			<MenuContent>
				<MenuItem>Item 4</MenuItem>
				<MenuItem>Item 5</MenuItem>
				<MenuItem>Item 6</MenuItem>
				<SubMenu>
					<SubMenuTrigger>Submenu</SubMenuTrigger>
					<SubMenuContent>
						<MenuItem>Item 10</MenuItem>
						<MenuItem>Item 11</MenuItem>
						<MenuItem>Item 12</MenuItem>
					</SubMenuContent>
				</SubMenu>
			</MenuContent>
		</Menu>
		<Menu>
			<MenuTrigger>Trigger 3</MenuTrigger>
			<MenuContent>
				<MenuItem>Item 7</MenuItem>
				<MenuItem>Item 8</MenuItem>
				<MenuItem>Item 9</MenuItem>
			</MenuContent>
		</Menu>
	</MenuBar>
</div>

<!-- <nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none" style="position: relative;">
      <button 
        role="menuitem" 
        aria-haspopup="true" 
        tabindex="0"
        aria-expanded="true"
        aria-controls="menu-1"
      >
        Trigger
      </button>
      <ul 
        role="menu" 
        id="menu-1"
        style="position: absolute; top: 100%; left: 0;"
      >
        <li role="none">
          <button role="menuitem" tabindex="-1">Item 1</button>
        </li>
        <li role="none">
          <button role="menuitem" tabindex="-1">Item 2</button>
        </li>
        <li role="none">
          <button role="menuitem" tabindex="-1">Item 3</button>
        </li>
      </ul>
    </li>
    
    <li role="none">
      <button 
        role="menuitem" 
        aria-haspopup="true" 
        tabindex="-1"
        aria-expanded="false"
        aria-controls="menu-2"
      >
        Trigger 2
      </button>
    </li>
    
    <li role="none">
      <button 
        role="menuitem" 
        aria-haspopup="true" 
        tabindex="-1"
        aria-expanded="false"
        aria-controls="menu-3"
      >
        Trigger 3
      </button>
    </li>
  </ul>
</nav> -->
