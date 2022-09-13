onEvent('mekanism.slurry.registry', event => {
	event.create("dirty_cobalt", "dirty").color(0x0043A5).ore('forge:ores/cobalt')
	event.create("clean_cobalt", "clean").color(0x0043A5).ore('forge:ores/cobalt')
})

onEvent('item.registry',event => {
    event.create('clump_cobalt').displayName('钴碎块')
    event.create('crystal_cobalt').displayName('钴结晶')
    event.create('dirty_dust_cobalt').displayName('污浊钴粉')
    event.create('dust_cobalt').displayName('钴粉')
    event.create('shard_cobalt').displayName('钴碎片')
})