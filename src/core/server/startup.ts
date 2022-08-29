import * as alt from 'alt-server';

alt.log(`alt:V Server - Started`);
alt.on('playerConnect', handlePlayerConnect);

function handlePlayerConnect(player: alt.Player) {
    alt.log(`[Player Connection] ${player.name} (ID: ${player.id}) đã truy cập vào máy chủ GTA:V Multiplayer.`);

    player.model = 'u_m_y_abner';
    player.spawn(36.19486618041992, 859.3850708007812, 197.71343994140625, 0);
    alt.emitClient(player, 'log:Console', 'alt:V Server - #1');
}
