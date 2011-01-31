function! VisualLL(line)
  " nuke non-ascii chars, so byte count matches char count
  let TAB_SIZE = 8
  let line = substitute(a:line, "[^\t]", "x", "g")
  while 1
    let idx = match(line, "\t")
    if idx < 0
      break
    endif
    let vs = TAB_SIZE - (idx % 8)
    let line = substitute(line, "\t", repeat("x", vs), "")
  endwhile
  return strlen(line)
endfunction

function! CheckLineLength(max_len)
  let bufn = bufnr("")
  let curln = 1
  let lines_to_check = []
  for line in getbufline(bufname("%"), 1, '$')
    let len_cl = VisualLL(line)
    if len_cl > a:max_len
      let d = {"bufnr": bufn, "lnum": curln, "type": "W",
              \ "text": printf("linewidth: %d", len_cl)}
      call add(lines_to_check, d)
    endif
    let curln = curln + 1
  endfor
  call setqflist(lines_to_check)
endfunction
